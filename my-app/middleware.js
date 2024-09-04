export { default } from "next-auth/middleware"

// Páginas listadas aqui estarão protegidas
export const config = { matcher: ["/profile"] };
