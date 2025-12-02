// Add this utility hook to handle document title without hydration issues
// Save as: src/hooks/useDocumentTitle.js

import { useEffect } from 'react';

export function useDocumentTitle(title) {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.title = title;
        }
    }, [title]);
}
