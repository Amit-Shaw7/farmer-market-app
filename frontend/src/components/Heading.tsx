import { Button } from "./ui/button";

interface HeadingProps {
    text: string,
    showButton?: boolean,
    onClick?: () => void
}
export default function Heading({ showButton, text, onClick }:HeadingProps) {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{text}</h2>
            {showButton ? <Button onClick={onClick} variant="link">See all</Button> : ""}
        </div>
    )
}