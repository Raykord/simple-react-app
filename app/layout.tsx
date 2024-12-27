import '@/app/ui/global.css';
import {inter, roboto} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <div>
          <p className={`${roboto.className} text-center text-sm text-gray-400`}>
            &copy; {new Date().getFullYear()} Права защищены битч!
          </p>
        </div>
      </body>
    </html>
  );
}
