"use client";

import { useEffect, RefObject } from "react";

/**
 * Custom hook to reset form validation errors when clicking outside the form(s).
 * 
 * @param refs - Single ref object or array of ref objects attached to the form container(s)
 * @param resetSetters - Array of state setter functions to clear errors (e.g., [setNameError, setEmailError])
 */
export function useFormErrorReset(
    refs: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
    resetSetters: Array<(value: null) => void>
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const refArray = Array.isArray(refs) ? refs : [refs];

            // Check if click is outside ALL provided refs
            const isOutside = refArray.every(ref => {
                // If ref is not active (null), consider it 'outside' (or ignore it? strictly speaking if it's null it's not clicked inside)
                // But we want to ensure we don't trigger if clicked inside ANY active ref.
                // So if any ref contains target, isOutside is false.
                return !ref.current || !ref.current.contains(event.target as Node);
            });

            if (isOutside) {
                // Clicked outside all form elements
                resetSetters.forEach((setter) => setter(null));
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs, resetSetters]);
}
