import { estedad } from "@/utils/local_fonts";
import "../globals.css";
import ProviderContext from "@/app/ProviderContext";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${estedad.variable} font-sans`}>
        <ProviderContext>
          {children}
        </ProviderContext>
      </body>
    </html>
  );
}
