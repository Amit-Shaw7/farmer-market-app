
import { useDispatch} from "react-redux";
import type { AppDispatch} from "@/store/Store";

// use throughout your app instead of useDispatch and useSelector

export const useAppDispatch: () => AppDispatch = useDispatch
