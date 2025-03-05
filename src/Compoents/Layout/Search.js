import React from 'react'
import { useState, useEffect } from 'react';
import { products } from '../../Data/Data';
import { useTranslation } from '../Translation/TranslationContext';
import { useSearch } from "../Product/SearchContext";
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import { CiSearch } from "react-icons/ci";


export default function Search() {
    const { t } = useTranslation();
    const { setProduct } = useSearch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const initialSearch = searchParams.get("search") || "";
    const [search, setSearch] = useState(initialSearch);
    const searchBtn = (products, search) => {
        return products.filter(
            (product) =>
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.brand.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())
        );
    };
  
    useEffect(() => {
        setProduct(searchBtn(products, search));
    }, [search, setProduct]);
    const handleSearch = (event) => {
        event.preventDefault();
        const currentParams = Object.fromEntries(searchParams.entries());
        if (search.trim()) {
            setSearchParams({ ...currentParams, search: search });
        } else {
            navigate("?");
        }
    }
    const handleKeyDown=(event)=>{
        if(event.key==="Enter"){
                handleSearch(event);}
    }
    return (

        <div className="d-flex align-items-center text-center col-12 col-sm-5 order-3 order-sm-2">
            <div className="p-1 ps-2 h40 w40 bgSearch">
                <CiSearch />
            </div>
            <input
                type="text"
                placeholder={`${t("Search")} ${t("for")} ${t("Products")} , ${t("Brands")} ${t("and")} ${t("more")}...`}
                className="py-1 px-2 border-0 col-sm-10 col-8 bgSearch h40 outline0"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(event)=>handleKeyDown(event)}
            />

            <Button onClick={handleSearch} text={t("Search")} btn="danger" />
        </div>

    )
}
