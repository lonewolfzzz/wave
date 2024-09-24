"use client";
import PlusIcon from '@/assets/plus.svg';
import MinusIcon from '@/assets/minus.svg';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

const AccordionItem = ({ question, answer, index, scrollDirection }: { question: string; answer: string; index: number; scrollDirection: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [borderWidth, setBorderWidth] = useState('0%');
    const [isItemVisible, setIsItemVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement | null>(null);
    const [answerHeight, setAnswerHeight] = useState('0px');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsItemVisible(true);
                    } else {
                        setIsItemVisible(false);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (itemRef.current) {
            observer.observe(itemRef.current);
        }
        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isItemVisible) {
            const delay = index * 300;
            if (scrollDirection === 'down') {
                setTimeout(() => {
                    setBorderWidth('100%');
                }, delay);
            } else if (scrollDirection === 'up') {
                setTimeout(() => {
                    setBorderWidth('0%');
                }, delay);
            }
        }
    }, [isItemVisible, scrollDirection, index]);

    useEffect(() => {
        if (isOpen) {
            setAnswerHeight(`${itemRef.current?.scrollHeight}px`);
        } else {
            setAnswerHeight('0px');
        }
    }, [isOpen]);

    return (
        <div 
            ref={itemRef}
            className="py-7 border-b" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0)', position: 'relative' }}
        >
            <div className="flex items-center">
                <span className="flex-1 text-lg font-bold">{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div
                className={clsx('mt-4 overflow-hidden transition-all duration-500 ease-in-out', {
                    'h-0': !isOpen,
                    'h-auto': isOpen,
                })}
                style={{ height: answerHeight }}
            >
                {answer}
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    width: borderWidth,
                    backgroundColor: 'white',
                    transition: 'width 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
            />
        </div>
    );
};

const items = [
    {
        question: 'What payment methods do you accept?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem, maiores aperiam totam, cupiditate recusandae alias voluptatum eligendi reprehenderit iste laboriosam commodi ipsum! Voluptatum asperiores officiis nostrum voluptas, consectetur blanditiis.',
    },
    {
        question: 'How does the pricing work for company?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem, maiores aperiam totam, cupiditate recusandae alias voluptatum eligendi reprehenderit iste laboriosam commodi ipsum! Voluptatum asperiores officiis nostrum voluptas, consectetur blanditiis.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem, maiores aperiam totam, cupiditate recusandae alias voluptatum eligendi reprehenderit iste laboriosam commodi ipsum! Voluptatum asperiores officiis nostrum voluptas, consectetur blanditiis.',
    },
    {
        question: 'Is my data secure?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem, maiores aperiam totam, cupiditate recusandae alias voluptatum eligendi reprehenderit iste laboriosam commodi ipsum! Voluptatum asperiores officiis nostrum voluptas, consectetur blanditiis.',
    },
];

export const FAQS = () => {
    const [scrollDirection, setScrollDirection] = useState<string>('down');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const faqRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        }

        return () => {
            if (faqRef.current) {
                observer.unobserve(faqRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-black text-white py-20">
            <div className="container" ref={faqRef}>
                <motion.h2 
                    initial={{ y: 60, opacity: 0 }} 
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                    transition={{ duration: 1, delay: 0.1 }}
                    className="text-center text-5xl font-bold tracking-tighter"
                >
                    Frequently Asked Questions
                </motion.h2>
                <motion.div 
                    initial={{ y: 100, opacity: 0 }} 
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} 
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-12 max-w-[648px] mx-auto"
                >
                    {items.map(({ question, answer }, index) => (
                        <AccordionItem 
                            question={question} 
                            answer={answer} 
                            key={question} 
                            index={index} 
                            scrollDirection={scrollDirection} 
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};