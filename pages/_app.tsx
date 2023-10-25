import { fontMono, fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
// import { Navbar } from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		
		<NextUIProvider>
			<NextThemesProvider>
				{/* <Navbar/> */}
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
