export default function PantallaSecundariaLayout({ children, }: { children: React.ReactNode}) {
    return(
        <div className="p-10 bg-gray-400 min-h-screen">
            <header className="mb-6">
                <h1 className="text-xl text-center">Pantalla Interesantes</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}