import React from "react";
import { Slide, SlideProps } from "@material-ui/core";

export const TransictionSlide = React.forwardRef<any, SlideProps>((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
))