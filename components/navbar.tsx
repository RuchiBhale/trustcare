import {
	Input,
	Kbd,
	Link,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";
import {
	SearchIcon
} from "@/components/icons";
//import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar shouldHideOnScroll style={{height:2}} maxWidth="xl" position="sticky">
			<NavbarContent className="hidden sm:flex gap-4" justify="start">
				<NavbarBrand className="gap-2 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo/>
						<p className="font-bold text-inherit">TRUSTCARE</p>
					</NextLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
      
				<NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
export default Navbar;