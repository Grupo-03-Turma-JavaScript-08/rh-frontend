export default function Home() {
    return (
        <main className="bg-[#0d2a47] text-white flex flex-col items-center justify-center min-h-[80vh] p-6">
            <div className="flex flex-col items-center">
                {/* Logo */}
                <h1 className="text-6xl font-extrabold">RH</h1>
                <span className="bg-yellow-400 px-4 py-1 rounded-full text-black font-bold -mt-3">
          SOLUTION
        </span>
            </div>

            <p className="mt-6 text-lg font-medium">
                Flexibilidade e performance para o seu crescimento
            </p>
        </main>
    );
}
