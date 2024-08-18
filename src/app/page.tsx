"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "/about",
			title: "About Me",
			description: "Getting to know each other is better.",
		},
		{
			href: "/project",
			title: "Project",
			description: "My Projects simple.",
		},
		{
			href: "#",
			title: "Curriculum Vitae",
			description: "My Curriculum Vitae.",
		},
	];

	return (
		<Flex style={{ backgroundImage: 'radial-gradient(ellipse at top left, var(--brand-background-strong) 0%, rgba(0,0,0,0) 50%)' }}
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={64}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							fillWidth paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{zIndex: '1'}}/>
						</Flex>
						<Flex
							position="relative"
							fillWidth gap="24" marginBottom="104"
							direction="column">
							<Heading
								variant="display-strong-s">
								Full Stack Dev.<br/> Photography.<br/>Editing.
							</Heading>
							<Button
								href="https://once-ui.com/docs"
								suffixIcon="chevronRight"
								variant="secondary">
								Contact Me
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Bima Adam, <Link href="https://github.com/bimaadam/">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/bimaadam/"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/invite/27rbimz/"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
