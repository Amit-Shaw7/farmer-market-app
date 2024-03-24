import { Card } from "./ui/card";

const Loading = () => {
    return (
        <div className='relative flex justify-center items-center h-screen w-full'>
            <div className="absolute top-[50%] left-[50%]">
                <Card
                    className="rounded-full shdow-lg flex items-center justify-center h-[50px] w-[50px]"
                >
                    <div className="h-[30px] w-[30px] animate-spin border-2 border-t-0 border-l-0 border-primary rounded-full"></div>
                </Card>
            </div>
        </div>
    );
};
export default Loading;