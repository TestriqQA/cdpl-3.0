export interface Certificate {
    id: string;
    holder: string;
    program: "AAA" | "CDPL" | string;
    status: "Valid" | "Revoked" | "Expired" | string;
    imageUrl?: string;
}
