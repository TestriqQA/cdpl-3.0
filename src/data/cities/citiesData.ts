// src/data/cities/citiesData.ts
export type City = {
    name: string;
    lat: number;
    lng: number;
    courseType: string;
    link: string;
};

export type District = {
    district: string;
    description?: string;
    cities: City[];
};

export type State = {
    state: string;
    description?: string;
    districts: District[];
};

export function getFlatLocations(states: State[]) {
    const flat: {
        name: string;
        lat: number;
        lng: number;
        type: string;
        link?: string;
    }[] = [];
    states.forEach((state) => {
        state.districts.forEach((district) => {
            district.cities.forEach((city) => {
                flat.push({
                    name: city.name,
                    lat: city.lat,
                    lng: city.lng,
                    type: city.courseType,
                    link: city.link,
                });
            });
        });
    });
    return flat;
}

/* -------------------------------------------------------------
   6 COURSE CATEGORIES (must exist for *every* city)
   ------------------------------------------------------------- */
const ALL_COURSES = [
    {
        type: "software-testing",
        label: "Software Testing",
        slugPrefix: "software-testing-course-in-",
    },
    {
        type: "data-science",
        label: "Data Science",
        slugPrefix: "data-science-course-in-",
        // alternative: "data-science-ai-ml-bi-course-in-"
    },
    {
        type: "business-intelligence",
        label: "Business Intelligence",
        slugPrefix: "business-intelligence-course-in-",
    },
    {
        type: "artificial-intelligence",
        label: "Artificial Intelligence",
        slugPrefix: "artificial-intelligence-course-in-",
    },
    {
        type: "web-development",
        label: "Web Development",
        slugPrefix: "web-development-course-in-",
    },
    {
        type: "digital-marketing",
        label: "Digital Marketing",
        slugPrefix: "digital-marketing-course-in-",
    },
];

/* -------------------------------------------------------------
   Helper – generate 6 entries for a city (lat/lng are shared)
   ------------------------------------------------------------- */
function makeCityEntries(
    name: string,
    lat: number,
    lng: number,
    slugCity: string
): City[] {
    return ALL_COURSES.map((c) => ({
        name,
        lat,
        lng,
        courseType: c.type,
        link: `/${c.slugPrefix}${slugCity}`,
    }));
}

/* -------------------------------------------------------------
   Build a district with **exactly** the cities you want.
   If a city already existed in the original data, we keep its
   coordinates and simply guarantee the 6 courses.
   ------------------------------------------------------------- */
function district(
    name: string,
    description: string,
    citySpecs: { name: string; lat: number; lng: number; slug: string }[]
): District {
    const cities: City[] = [];
    citySpecs.forEach((spec) => cities.push(...makeCityEntries(spec.name, spec.lat, spec.lng, spec.slug)));
    return { district: name, description, cities };
}

/* -------------------------------------------------------------
   State descriptions – list all 6 categories
   ------------------------------------------------------------- */
const STATE_DESC =
    "Premier courses in {{state}}, including Data Science, Digital Marketing, Web Development, Software Testing, Business Intelligence, Artificial Intelligence. Find professional training and bootcamps in major cities across the state. Keywords: data science, digital marketing, web development, software testing, business intelligence, artificial intelligence courses {{state}}, training {{state}}.";

export const statesData: State[] = [
    {
        state: "Maharashtra",
        description: STATE_DESC.replace(/{{state}}/g, "Maharashtra"),
        districts: [
            district(
                "Mumbai",
                "Key location for Maharashtra courses, including Mumbai area.",
                [
                    {
                        name: "Mumbai",
                        lat: 19.0759837,
                        lng: 72.8776559,
                        slug: "mumbai",
                    },
                ]
            ),
            district(
                "Pune",
                "Key location for Maharashtra courses, including Pune area.",
                [
                    {
                        name: "Pune",
                        lat: 18.5204303,
                        lng: 73.8567437,
                        slug: "pune",
                    },
                ]
            ),
            district(
                "Amravati",
                "Key location for Maharashtra courses, including Amravati area.",
                [
                    {
                        name: "Amravati",
                        lat: 20.9374238,
                        lng: 77.7795513,
                        slug: "amravati",
                    },
                ]
            ),
            district(
                "Aurangabad",
                "Key location for Maharashtra courses, including Aurangabad area.",
                [
                    {
                        name: "Aurangabad",
                        lat: 19.8761653,
                        lng: 75.3433139,
                        slug: "aurangabad",
                    },
                ]
            ),
            district(
                "Nagpur",
                "Key location for Maharashtra courses, including Nagpur area.",
                [
                    {
                        name: "Nagpur",
                        lat: 21.1458004,
                        lng: 79.0881546,
                        slug: "nagpur",
                    },
                ]
            ),
            // ---- Unmapped / Suburban Mumbai locations (keep original coords = 0) ----
            district("Unmapped Locations", "Key location for Maharashtra courses, including Unmapped Locations area.", [
                { name: "Virar", lat: 0, lng: 0, slug: "virar" },
                { name: "Nallasopara", lat: 0, lng: 0, slug: "nallasopara" },
                { name: "Vasai Road", lat: 0, lng: 0, slug: "vasai-road" },
                { name: "Naigaon", lat: 0, lng: 0, slug: "naigaon" },
                { name: "Bhayandar", lat: 0, lng: 0, slug: "bhayandar" },
                { name: "Mira Road", lat: 0, lng: 0, slug: "mira-road" },
                { name: "Dahisar", lat: 0, lng: 0, slug: "dahisar" },
                { name: "Borivali", lat: 0, lng: 0, slug: "borivali" },
                { name: "Kandivali", lat: 0, lng: 0, slug: "kandivali" },
                { name: "Malad", lat: 0, lng: 0, slug: "malad" },
                { name: "Goregaon", lat: 0, lng: 0, slug: "goregaon" },
                { name: "Ram Mandir", lat: 0, lng: 0, slug: "ram-mandir" },
                { name: "Jogeshwari", lat: 0, lng: 0, slug: "jogeshwari" },
                { name: "Andheri", lat: 0, lng: 0, slug: "andheri" },
                { name: "Vile Parle", lat: 0, lng: 0, slug: "vile-parle" },
                { name: "Santacruz", lat: 0, lng: 0, slug: "santacruz" },
                { name: "Khar Road", lat: 0, lng: 0, slug: "khar-road" },
                { name: "Bandra", lat: 0, lng: 0, slug: "bandra" },
                { name: "Mahim", lat: 0, lng: 0, slug: "mahim" },
                { name: "Matunga Road", lat: 0, lng: 0, slug: "matunga-road" },
                { name: "Dadar", lat: 0, lng: 0, slug: "dadar" },
                { name: "Prabhadevi", lat: 0, lng: 0, slug: "prabhadevi" },
                { name: "Lower Parel", lat: 0, lng: 0, slug: "lower-parel" },
                { name: "Mahalaxmi", lat: 0, lng: 0, slug: "mahalaxmi" },
                { name: "Mumbai Central", lat: 0, lng: 0, slug: "mumbai-central" },
                { name: "Grant Road", lat: 0, lng: 0, slug: "grant-road" },
                { name: "Charni Road", lat: 0, lng: 0, slug: "charni-road" },
                { name: "Marine Lines", lat: 0, lng: 0, slug: "marine-lines" },
                { name: "Churchgate", lat: 0, lng: 0, slug: "churchgate" },
                { name: "CSMT", lat: 0, lng: 0, slug: "csmt" },
                { name: "Masjid", lat: 0, lng: 0, slug: "masjid" },
                { name: "Sandhurst Road", lat: 0, lng: 0, slug: "sandhurst-road" },
                { name: "Byculla", lat: 0, lng: 0, slug: "byculla" },
                { name: "Chinchpokli", lat: 0, lng: 0, slug: "chinchpokli" },
                { name: "Parel", lat: 0, lng: 0, slug: "parel" },
                { name: "Matunga", lat: 0, lng: 0, slug: "matunga" },
                { name: "Sion", lat: 0, lng: 0, slug: "sion" },
                { name: "Kurla", lat: 0, lng: 0, slug: "kurla" },
                { name: "Wadala Road", lat: 0, lng: 0, slug: "wadala-road" },
                { name: "Chembur", lat: 0, lng: 0, slug: "chembur" },
                { name: "Vashi", lat: 0, lng: 0, slug: "vashi" },
                { name: "Nerul", lat: 0, lng: 0, slug: "nerul" },
                { name: "Seawoods-Darave", lat: 0, lng: 0, slug: "seawoods-darave" },
                { name: "CBD Belapur", lat: 0, lng: 0, slug: "cbd-belapur" },
                { name: "Panvel", lat: 0, lng: 0, slug: "panvel" },
            ]),
        ],
    },

    /* ---------- OTHER STATES (same pattern) ---------- */
    {
        state: "Uttar Pradesh",
        description: STATE_DESC.replace(/{{state}}/g, "Uttar Pradesh"),
        districts: [
            district("Agra", "Key location for Uttar Pradesh courses, including Agra area.", [
                { name: "Agra", lat: 27.1766701, lng: 78.0080745, slug: "agra" },
            ]),
            district("Allahabad", "Key location for Uttar Pradesh courses, including Allahabad area.", [
                { name: "Allahabad", lat: 25.4358011, lng: 81.846311, slug: "allahabad" },
            ]),
            district("Lucknow", "Key location for Uttar Pradesh courses, including Lucknow area.", [
                { name: "Lucknow", lat: 26.8466937, lng: 80.946166, slug: "lucknow" },
            ]),
            district("Varanasi", "Key location for Uttar Pradesh courses, including Varanasi area.", [
                { name: "Varanasi", lat: 25.3176452, lng: 82.9739144, slug: "varanasi" },
            ]),
            district("Kanpur", "Key location for Uttar Pradesh courses, including Kanpur area.", [
                { name: "Kanpur", lat: 26.447965, lng: 80.330572, slug: "kanpur" },
            ]),
        ],
    },

    {
        state: "Punjab",
        description: STATE_DESC.replace(/{{state}}/g, "Punjab"),
        districts: [
            district("Amritsar", "Key location for Punjab courses, including Amritsar area.", [
                { name: "Amritsar", lat: 31.6339793, lng: 74.8722642, slug: "amritsar" },
            ]),
            district("Chandigarh", "Key location for Punjab courses, including Chandigarh area.", [
                { name: "Chandigarh", lat: 30.7399738, lng: 76.7567368, slug: "chandigarh" },
            ]),
            district("Ludhiana", "Key location for Punjab courses, including Ludhiana area.", [
                { name: "Ludhiana", lat: 30.900965, lng: 75.8572758, slug: "ludhiana" },
            ]),
        ],
    },

    {
        state: "Madhya Pradesh",
        description: STATE_DESC.replace(/{{state}}/g, "Madhya Pradesh"),
        districts: [
            district("Bhopal", "Key location for Madhya Pradesh courses, including Bhopal area.", [
                { name: "Bhopal", lat: 23.2599333, lng: 77.412615, slug: "bhopal" },
            ]),
            district("Indore", "Key location for Madhya Pradesh courses, including Indore area.", [
                { name: "Indore", lat: 22.7195687, lng: 75.8577258, slug: "indore" },
            ]),
        ],
    },

    {
        state: "Odisha",
        description: STATE_DESC.replace(/{{state}}/g, "Odisha"),
        districts: [
            district("Khurda", "Key location for Odisha courses, including Khurda area.", [
                { name: "Bhubaneswar", lat: 20.295515, lng: 85.824797, slug: "bhubaneswar" },
            ]),
        ],
    },

    {
        state: "Uttarakhand",
        description: STATE_DESC.replace(/{{state}}/g, "Uttarakhand"),
        districts: [
            district("Dehradun", "Key location for Uttarakhand courses, including Dehradun area.", [
                { name: "Dehradun", lat: 30.3164945, lng: 78.0321918, slug: "dehradun" },
            ]),
        ],
    },

    {
        state: "Kerala",
        description: STATE_DESC.replace(/{{state}}/g, "Kerala"),
        districts: [
            district("Ernakulam", "Key location for Kerala courses, including Ernakulam area.", [
                { name: "Kochi", lat: 9.9312328, lng: 76.2673041, slug: "kochi" },
            ]),
            district("Thiruvananthapuram", "Key location for Kerala courses, including Thiruvananthapuram area.", [
                { name: "Thiruvananthapuram", lat: 8.5241391, lng: 76.9366376, slug: "thiruvananthapuram" },
            ]),
        ],
    },

    {
        state: "Bihar",
        description: STATE_DESC.replace(/{{state}}/g, "Bihar"),
        districts: [
            district("Patna", "Key location for Bihar courses, including Patna area.", [
                { name: "Patna", lat: 25.5940947, lng: 85.1375645, slug: "patna" },
            ]),
        ],
    },

    {
        state: "Andhra Pradesh",
        description: STATE_DESC.replace(/{{state}}/g, "Andhra Pradesh"),
        districts: [
            district("Krishna", "Key location for Andhra Pradesh courses, including Krishna area.", [
                { name: "Vijayawada", lat: 16.5061743, lng: 80.6480153, slug: "vijayawada" },
            ]),
            district("Visakhapatnam", "Key location for Andhra Pradesh courses, including Visakhapatnam area.", [
                { name: "Visakhapatnam", lat: 17.6868159, lng: 83.2184815, slug: "visakhapatnam" },
            ]),
        ],
    },

    {
        state: "Telangana",
        description: STATE_DESC.replace(/{{state}}/g, "Telangana"),
        districts: [
            district("Hyderabad", "Key location for Telangana courses, including Hyderabad area.", [
                { name: "Hyderabad", lat: 17.384934, lng: 78.486616, slug: "hyderabad" },
            ]),
        ],
    },

    {
        state: "Chhattisgarh",
        description: STATE_DESC.replace(/{{state}}/g, "Chhattisgarh"),
        districts: [
            district("Raipur", "Key location for Chhattisgarh courses, including Raipur area.", [
                { name: "Raipur", lat: 21.2513844, lng: 81.6296413, slug: "raipur" },
            ]),
        ],
    },
] as const;
