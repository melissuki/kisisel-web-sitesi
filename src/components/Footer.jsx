import { useApp } from "../context/AppContext";

export default function Footer() {
    const { text } = useApp();

    return (
        <footer className="bg-white dark:bg-[#252128] py-24">
            <div className="px-[10%] max-w-[1440px] mx-auto flex flex-col items-center gap-6 text-center">
                <h2 className="text-4xl font-bold text-[#4731D3] dark:text-[#8F88FF]">
                    {text.footer.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
                    {text.footer.text}
                </p>
                <a
                href={`mailto:${text.footer.email}`}
                className="text-[#4731D3] dark:text-[#CBF281] underline font-medium"
                >
                    {text.footer.email}
            </a>
            <div className="flex gap-6 mt-2">
                <a href="https://github.com/melissuki" target="_blank" rel="noreferrer" className="text-[#4731D3] dark:text-[#CBF281]">Github</a>
                <a href="https://www.linkedin.com/in/melis-su-kaya-397529248/" target="_blank" rel="noreferrer" className="text-[#4731D3] dark:text-[#CBF281]">LinkedIn</a>
                <a href="https://instagram.com/melissukya" target="_blank" rel="noreferrer" className="text-[#4731D3] dark:text-[#CBF281]">Instagram</a>

            </div>

            </div>

        </footer>
    );
}