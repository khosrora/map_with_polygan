import { estedad } from "@/utils/local_fonts";
import "../globals.css";
import Provider from "@/app/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${estedad.variable} font-sans`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
