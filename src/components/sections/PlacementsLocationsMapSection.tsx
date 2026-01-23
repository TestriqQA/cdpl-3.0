import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import L from 'leaflet';

import { MapPin } from "lucide-react";

/* ========= Types & Data ========= */

type City = {
    name: string;
    lat: number;
    lng: number;
    count: number;
    avgLpa: number;
    maxLpa: number;
    domains: string[];
};

const CITY_DATA: City[] = [
    { name: "Bengaluru", lat: 12.9716, lng: 77.5946, count: 42, avgLpa: 7.2, maxLpa: 17, domains: ["QA", "SDET", "Data"] },
    { name: "Hyderabad", lat: 17.385, lng: 78.4867, count: 31, avgLpa: 6.8, maxLpa: 15, domains: ["QA", "Full-Stack"] },
    { name: "Pune", lat: 18.5204, lng: 73.8567, count: 28, avgLpa: 6.4, maxLpa: 13, domains: ["SDET", "Data"] },
    { name: "Mumbai", lat: 19.076, lng: 72.8777, count: 36, avgLpa: 7.0, maxLpa: 16, domains: ["QA", "Full-Stack"] },
    { name: "Gurgaon", lat: 28.4595, lng: 77.0266, count: 22, avgLpa: 6.5, maxLpa: 12, domains: ["QA", "Data"] },
    { name: "Noida", lat: 28.5355, lng: 77.391, count: 19, avgLpa: 6.1, maxLpa: 10, domains: ["QA"] },
    { name: "Chennai", lat: 13.0827, lng: 80.2707, count: 27, avgLpa: 6.3, maxLpa: 11, domains: ["SDET", "Full-Stack"] },
];

const CHIP_CITIES = ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Gurgaon", "Chennai", "Noida"];

/* ========= Component ========= */

export default function PlacementsLocationsMapSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const baseRef = useRef<L.TileLayer | null>(null);
    const providersRef = useRef<number>(0);
    const layersRef = useRef<Record<string, { circle: L.Circle; innerDot: L.CircleMarker; layerGroup: L.LayerGroup }>>({});
    const resizeObsRef = useRef<ResizeObserver | null>(null);

    const [active, setActive] = useState<string | null>(null);
    const [tileMsg, setTileMsg] = useState<string>("");

    const stats = useMemo(() => {
        const total = CITY_DATA.reduce((s, c) => s + c.count, 0);
        const topCity = CITY_DATA.slice().sort((a, b) => b.count - a.count)[0];
        const avg = Math.round((CITY_DATA.reduce((s, c) => s + c.avgLpa * c.count, 0) / Math.max(1, total)) * 10) / 10;
        return { total, topCity, avg };
    }, []);

    /* ===== Helpers ===== */

    const radiusFor = useCallback((count: number) => {
        const cmin = 15, cmax = 55;
        const t = (Math.min(cmax, Math.max(cmin, count)) - cmin) / (cmax - cmin);
        return 600 + t * 1200; // meters
    }, []);

    const tileProviders = useMemo(
        () => [
            {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution:
                    '\u00a9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                subdomains: ["a", "b", "c"],
            },
            {
                url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                attribution:
                    '\u00a9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \u00a9 <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: ["a", "b", "c", "d"],
            },
            {
                url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
                attribution:
                    '\u00a9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \u00a9 <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: ["a", "b", "c", "d"],
            },
        ],
        []
    );

    const addOnce = useCallback((node: HTMLLinkElement | HTMLScriptElement, key: string) => {
        node.setAttribute("data-leaflet-key", key);
        if (!document.querySelector(`[data-leaflet-key="${key}"]`)) {
            (node.tagName === "LINK" ? document.head : document.body).appendChild(node);
        }
    }, []);

    const loadLeaflet = useCallback(async () => {
        if (!document.querySelector('[data-leaflet-key="leaflet-css"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
            addOnce(link, "leaflet-css");
        }
        const ensureScript = (src: string, key: string) =>
            new Promise<void>((resolve, reject) => {
                const win = window as typeof window & { L?: typeof import('leaflet') };
                if (typeof window !== 'undefined' && win.L) return resolve();
                if (document.querySelector(`[data-leaflet-key="${key}"]`)) {
                    const check = () => (typeof window !== 'undefined' && win.L ? resolve() : setTimeout(check, 50));
                    return check();
                }
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                addOnce(script, key);
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load ${src}`));
            });

        try {
            await ensureScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", "leaflet-js-unpkg");
        } catch {
            await ensureScript("https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js", "leaflet-js-jsdelivr");
        }
    }, [addOnce]);

    const wireBaseLayer = useCallback((L: typeof import('leaflet'), map: L.Map) => {
        // remove previous base layer
        if (baseRef.current) {
            baseRef.current.remove();
            baseRef.current = null;
        }
        const idx = providersRef.current % tileProviders.length;
        const p = tileProviders[idx];

        const layer = L.tileLayer(p.url, {
            maxZoom: 19,
            subdomains: p.subdomains,
            attribution: p.attribution,
            crossOrigin: true,
        });

        let loaded = false;
        const onLoad = () => {
            loaded = true;
            setTileMsg("");
            layer.off("load", onLoad);
            layer.off("tileerror", onError);
        };
        const onError = () => {
            if (loaded) return;
            // fallback to next provider
            providersRef.current += 1;
            setTileMsg("Switching tile provider...");
            setTimeout(() => {
                wireBaseLayer(L, map);
            }, 50);
        };

        layer.on("load", onLoad);
        layer.on("tileerror", onError);
        layer.addTo(map);
        baseRef.current = layer;

        // safety timeout in case no events fire
        setTimeout(() => {
            if (!loaded) onError();
        }, 1500);
    }, [tileProviders, setTileMsg, providersRef, baseRef]);

    /* ===== Effect: load Leaflet + init map with provider fallback ===== */

    useEffect(() => {
        let cancelled = false;

        const init = async () => {
            if (!containerRef.current) return;
            try {
                await loadLeaflet();
            } catch (err: unknown) {
                setTileMsg(err instanceof Error ? err.message : "Leaflet failed to load.");
                return;
            }
            if (cancelled) return;

            const win = window as typeof window & { L?: typeof import('leaflet') };
            const L = win.L as typeof import('leaflet');
            if (!L) {
                setTileMsg("Leaflet not available on window.");
                return;
            }

            // destroy previous map (Fast Refresh/StrictMode)
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }

            // create map
            mapRef.current = L.map(containerRef.current!, {
                zoomControl: false,
                scrollWheelZoom: true,
            });
            L.control.zoom({ position: "bottomright" }).addTo(mapRef.current!);

            // base layer with fallback chain
            wireBaseLayer(L, mapRef.current!);

            // markers
            Object.values(layersRef.current).forEach((layer) => layer.layerGroup.remove());
            layersRef.current = {};
            const group = L.featureGroup();

            CITY_DATA.forEach((c) => {
                const circle = L.circle([c.lat, c.lng], {
                    radius: radiusFor(c.count),
                    color: "#7ee7ff",
                    weight: 1.2,
                    opacity: 0.85,
                    fillColor: "#9d7bff",
                    fillOpacity: 0.25,
                    className: "cdpl-pulse-circle",
                });
                const innerDot = L.circleMarker([c.lat, c.lng], {
                    radius: 6,
                    color: "#ffffff",
                    weight: 2,
                    fillColor: "#7ee7ff",
                    fillOpacity: 1,
                });

                const popupHTML = `
          <div style="font-size:12px; line-height:1.35">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:9999px;background:#e6faff;border:1px solid #bdefff;">📍</span>
              <strong>${c.name}</strong>
              <span style="margin-left:6px;padding:2px 6px;border-radius:6px;background:#f1fafe;color:#0284c7;border:1px solid #bae6fd;">${c.count} placements</span>
            </div>
            <div style="color:#475569;margin-bottom:4px">Avg: <b style="color:#0f172a">${c.avgLpa} LPA</b> • Max: <b style="color:#0f172a">${c.maxLpa} LPA</b></div>
            <div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:6px;">
              ${c.domains.map((d) => `<span style="font-size:10px;padding:2px 6px;border-radius:6px;border:1px solid #e5e7eb;background:#fff;color:#374151">${d}</span>`).join("")}
            </div>
          </div>
        `;

                circle.bindPopup(popupHTML, { closeButton: false, offset: [0, -6] });
                innerDot.bindPopup(popupHTML, { closeButton: false, offset: [0, -6] });

                const layerGroup = L.layerGroup([circle, innerDot]).addTo(mapRef.current!);
                layerGroup.on("mouseover", () => circle.setStyle({ fillOpacity: 0.35, weight: 1.8 }));
                layerGroup.on("mouseout", () => circle.setStyle({ fillOpacity: 0.25, weight: 1.2 }));
                layerGroup.on("click", () => {
                    setActive(c.name);
                    innerDot.openPopup();
                });

                layersRef.current[c.name] = { circle, innerDot, layerGroup };
                group.addLayer(layerGroup);
            });

            const bounds = group.getBounds();
            if (bounds.isValid()) mapRef.current!.fitBounds(bounds.pad(0.2));

            // pulse animation
            const styleId = "cdpl-map-pulse-style";
            if (!document.getElementById(styleId)) {
                const style = document.createElement("style");
                style.id = styleId;
                style.innerHTML = `
          .cdpl-pulse-circle { animation: cdplPulse 2.2s ease-in-out infinite; }
          @keyframes cdplPulse { 0% {opacity:.22} 50% {opacity:.38} 100% {opacity:.22} }
          .leaflet-container { background: #f7f7f7; } /* avoids full grey */
        `;
                document.head.appendChild(style);
            }

            setTimeout(() => mapRef.current?.invalidateSize(), 60);

            if (!resizeObsRef.current && "ResizeObserver" in window) {
                resizeObsRef.current = new ResizeObserver(() => {
                    mapRef.current?.invalidateSize();
                });
                if (containerRef.current) {
                    resizeObsRef.current.observe(containerRef.current);
                }
            }
        };

        init();

        return () => {
            cancelled = true;
            mapRef.current?.remove();
            resizeObsRef.current?.disconnect();
        };
    }, [loadLeaflet, wireBaseLayer, radiusFor, containerRef, mapRef, setTileMsg, layersRef, setActive]);


    return (
        <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
            {tileMsg && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 text-white text-sm font-medium">
                    {tileMsg}
                </div>
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Placement Footprint Across India
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore the cities where our alumni are making an impact. We connect talent with top companies nationwide.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Map Container */}
                    <div>
                        <div
                            ref={containerRef}
                            className="w-full h-96 bg-gray-200 rounded-xl shadow-xl overflow-hidden relative"
                        ></div>
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            Interactive map showing placement locations.
                        </p>
                    </div>

                    {/* Stats and Call to Action */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Placements</h3>
                                <p className="text-4xl font-bold text-blue-600">{stats.total}+</p>
                                <p className="text-sm text-gray-500 mt-2">Across various domains</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Average Package</h3>
                                <p className="text-4xl font-bold text-green-600">{stats.avg} LPA</p>
                                <p className="text-sm text-gray-500 mt-2">For our placed students</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Placement Cities</h3>
                            <div className="flex flex-wrap gap-3">
                                {CHIP_CITIES.map((city) => (
                                    <span
                                        key={city}
                                        onClick={() => setActive(city)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${active === city
                                                ? "bg-blue-600 text-white shadow-md"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                                        `}
                                    >
                                        <MapPin className="inline-block w-4 h-4 mr-1" /> {city}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 003 12c0 2.755 1.05 5.492 2.944 7.957l-1.414 1.414A1 1 0 005 22h14a1 1 0 00.707-1.707l-1.414-1.414A12.001 12.001 0 0021 12c0-2.755-1.05-5.492-2.944-7.957z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Ready to Launch Your Career?</h3>
                                <p className="text-gray-600">Join our programs and become part of our success story.</p>
                                <button className="mt-3 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    Explore Courses
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
