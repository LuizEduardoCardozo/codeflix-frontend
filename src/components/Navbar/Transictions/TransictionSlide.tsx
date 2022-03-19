import React from "react";
import { Slide, SlideProps } from "@material-ui/core";

// TODO: fix TransictionSlide type (the right is TransitionSlide)
export const TransictionSlide = React.forwardRef<any, SlideProps>((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
))