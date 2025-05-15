import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
    { icon: <RiDoubleQuotesL />, name: "Աննա Կարապետյան", comment: `Solar Master-ի հետ աշխատելը ֆանտաստիկ փորձ էր: Նրանց բանիմաց թիմը տրամադրեց սպասարկման և փորձի մակարդակ, որը ամբողջ գործընթացը դարձրեց անխափան: Արդյունքը. Արեգակնային համակարգ, որը լիովին համապատասխանում է իմ էներգիայի կարիքներին:` },
    { icon: <RiDoubleQuotesL />, name: "Վահե Մկրտչյան", comment: `Ես տպավորված էի Solar Master-ի պրոֆեսիոնալիզմով և գիտելիքներով: Առաջին խորհրդակցությունից մինչև վերջնական տեղադրում, նրանք ինձ առաջնորդեցին գործընթացի յուրաքանչյուր քայլով: Ավարտված արևային համակարգը փոխեց իմ էներգիայի օգտագործումը և գերազանցեց իմ բոլոր սպասելիքները:` },
    { icon: <RiDoubleQuotesL />, name: "Եվա Սահակյան", comment: `Solar Master-ը լիովին փոխել է իմ տեսակետը վերականգնվող էներգիայի վերաբերյալ: Նրանց նվիրվածությունը իմ կարիքները հասկանալու և հարմարեցված լուծում տալուն տպավորիչ էր: Ես հիացած եմ արդյունքներով և բարձր խորհուրդ եմ տալիս նրանց ծառայությունները բոլորին, ովքեր հետաքրքրված են արևային էներգիայով:` },
    { icon: <RiDoubleQuotesL />, name: "Հայկազ Խաչատուրյան", comment: `Solar Master-ն իրականություն դարձրեց իմ արևային ձգտումները: Մանրուքների նկատմամբ նրանց մանրակրկիտ ուշադրությունը և որակին նվիրվածությունը իսկապես գերազանցեցին իմ սպասելիքները: Իմ տունն այժմ աշխատում է մաքուր էներգիայով, և ես չէի կարող ավելի գոհ լինել:` },
];

const Slide = () => {
    const [index, setIndex] = useState(0);
    const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const direction = isSmallScreen ? "x" : "y";

    return (
        <div className="relative w-full h-100 md:h-80 overflow-hidden rounded-2xl shadow-xl p-4 md:flex">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ [direction]: 100, opacity: 0 }}
                    animate={{ [direction]: 0, opacity: 1 }}
                    exit={{ [direction]: -100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute w-full h-full flex items-center justify-center text-center p-4"
                >
                    <div className="content">
                        <h3>{testimonials[index].icon}</h3>
                        <h2 className="text-xl font-bold text-gray-800">{testimonials[index].name}</h2>
                        <p className="mt-2 text-gray-600">{testimonials[index].comment}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default Slide;
