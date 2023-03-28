import Genre from "@/data/models/dto/Genre";
import {MovieSection} from "@/uiDataHolders/MovieSection";

interface HomeData{
    genres: Genre[]
    sections: MovieSection[]
}

export default HomeData