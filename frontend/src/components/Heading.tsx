import { Button } from "./ui/button";

interface HeadingProps {
    text: string,
    showButton?: boolean,
    onClick?: () => void
}
const Heading = ({ showButton, text, onClick }:HeadingProps) => {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{text}</h2>
            {showButton ? <Button onClick={onClick} variant="link">See all</Button> : ""}
        </div>
    );
};

export default Heading;