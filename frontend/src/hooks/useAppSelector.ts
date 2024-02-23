
import {TypedUseSelectorHook, useSelector} from "react-redux"
import type {RootState} from "@/store/Store";

// use throughout your app instead of useDispatch and useSelector

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector