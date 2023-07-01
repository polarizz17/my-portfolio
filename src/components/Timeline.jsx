import React from "react";
import { BioDataCard } from "./BioDataCard";
import { BioDataHead, BioDataEdu, BioDataExp } from "../data/BioData";

function Timeline() {
    return (
        <>
            <div className="col-lg-6">
                <h2>{BioDataHead.bio_edu_sub_head}</h2>
                <div className="biodata_sub">
                    {BioDataEdu.map((val) => {
                        return (
                            <BioDataCard
                                key={val.id}
                                course={val.edu_course}
                                place={val.edu_place}
                                desc={val.edu_desc}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="col-lg-6">
                <h2>{BioDataHead.bio_exp_sub_head}</h2>
                <div className="biodata_sub">
                    {BioDataExp.map((val) => {
                        return (
                            <BioDataCard
                                key={val.id}
                                course={val.exp_course}
                                place={val.exp_place}
                                desc={val.exp_desc}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Timeline;
