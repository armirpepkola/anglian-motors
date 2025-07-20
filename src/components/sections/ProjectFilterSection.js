"use client";

import { useState } from 'react';
import Link from "next/link";
import {projectsFiltersData} from "@/data/project";
import Image from "next/image";

export default function ProjectFilterSection() {
    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filteredProjects = activeFilter === '*'
        ? projectsFiltersData
        : projectsFiltersData.filter(project => project.categories.includes(activeFilter));

    return (
        <section className="filter-area pt-130 pb-130">
            <div className="container">
                <ul className="filter__list mb-60">
                    <li
                        className={activeFilter === '*' ? 'active' : ''}
                        onClick={() => handleFilterClick('*')}
                    >
                        All
                    </li>
                    <li
                        className={activeFilter === 'animal' ? 'active' : ''}
                        onClick={() => handleFilterClick('animal')}
                    >
                        Animal Rescue
                    </li>
                    <li
                        className={activeFilter === 'plantation' ? 'active' : ''}
                        onClick={() => handleFilterClick('plantation')}
                    >
                        Tree Plantation
                    </li>
                    <li
                        className={activeFilter === 'renovation' ? 'active' : ''}
                        onClick={() => handleFilterClick('renovation')}
                    >
                        Renovation
                    </li>
                </ul>
                <div className="row g-4 filter__items">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className={`col-lg-4 col-md-6 ${project.categories.join(' ')}`}
                        >
                            <div className="filter__item">
                                <i className="fa-solid fa-plus"></i>
                                <Link href="/project/single" className="filter__image">
                                    <Image src={project.image} alt="image" className="h-auto"/>
                                </Link>
                                <div className="filter__content">
                                    <h3>
                                        <Link href="/project/single">{project.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}