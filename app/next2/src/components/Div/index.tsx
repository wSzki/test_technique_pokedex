"use client"

import styled from "styled-components"
import { GLOBALS } from "@/settings"

interface DivProps {
	absolute?       :   boolean,
	column?         :   boolean,
	bottom?         :   boolean,
	top?            :   boolean,
	left?           :   boolean,
	right?          :   boolean,
	align_bottom?   :   boolean,
	fill?           :   boolean,
	center?         :   boolean,
	padding_right?  :   number,
	padding_top?    :   number,
	padding_left?   :   number,
	padding_bottom? :   number,
}

const Div = styled.div<DivProps>
`
display             :   flex;
flex-direction      :   ${props => props.column         ? "column"                             : "row"};
position            :   ${props => props.absolute       ? "absolute"                           : "relative"};
bottom              :   ${props => props.bottom         ? "0px"                                : ""};
top                 :   ${props => props.top            ? "0px"                                : ""};
left                :   ${props => props.left           ? "0px"                                : ""};
right               :   ${props => props.right          ? "0px"                                : ""};
padding-right       :   ${props => props.padding_right  ? (props.padding_right*GLOBALS.CONSTANT)+GLOBALS.UNIT  : ""};
padding-top         :   ${props => props.padding_top    ? (props.padding_top*GLOBALS.CONSTANT)+GLOBALS.UNIT    : ""};
padding-left        :   ${props => props.padding_left   ? (props.padding_left*GLOBALS.CONSTANT)+GLOBALS.UNIT   : ""};
padding-bottom      :   ${props => props.padding_bottom ? (props.padding_bottom*GLOBALS.CONSTANT)+GLOBALS.UNIT : ""};
align-items         :   ${props => props.align_bottom   ? "end"                                : ""};
width               :   ${props => props.fill           ? "100%"                               : ""};
height              :   ${props => props.fill           ? "100%"                               : ""};
justify-content     :   ${props => props.center         ? "center"                      : ""};
align-items         :   ${props => props.center         ? "center"                      : ""};

`

export default Div
