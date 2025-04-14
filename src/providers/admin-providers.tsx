'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

import { SidebarProvider } from '@/hooks/use-sidebar';
import { Toaster } from '@/components/ui/sonner';

interface AdminProvidersProps {
	children: React.ReactNode;
}

export function AdminProviders({ children }: AdminProvidersProps) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange>
			<SidebarProvider>
				{children}
				<Toaster />
			</SidebarProvider>
		</ThemeProvider>
	);
}
