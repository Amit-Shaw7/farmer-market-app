interface SectionHeadingProps {
    text: string,
    showButton?: boolean,
    onClick?: () => void
}
const PageHeading = ({ text }: SectionHeadingProps) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{text}</h1>
        </div>
    );
};

export default PageHeading;