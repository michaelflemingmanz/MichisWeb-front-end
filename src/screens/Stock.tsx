import { ArrowLeftCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

import { useNavigate } from "react-router-dom";//AGREGADO

export const Stock = (): JSX.Element => {

  const navigate = useNavigate();//AGREGADO

  // Stock management options data
  const stockOptions = [
    "Ingresar productos en stock",
    "Registrar entrega de medicamentos",
    "Emitir informes de stock",
    "Registrar baja de medicamentos",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[393px] h-[852px] relative">
        {/* Back button */}
        <button onClick={() => navigate("/funcionario")}>
          <ArrowLeftCircleIcon className="absolute w-[34px] h-[33px] top-[17px] left-4 text-black" />
        </button>

        {/* Title */}
        <div className="absolute top-[54px] left-[169px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-black text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
          STOCK
        </div>

        {/* Divider */}
        <div className="flex flex-col w-80 items-start justify-center absolute top-[89px] left-9">
          <Separator className="w-full" />
        </div>

        {/* Stock management options */}
        <div className="flex flex-col gap-[28px] absolute top-[118px] left-[43px]">
          {stockOptions.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-[307px] h-10 bg-[#2c2c2c] text-white border border-solid rounded-lg"
            >
              <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
                {option}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
