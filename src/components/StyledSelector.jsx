import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import leftClick from "../Images/mouseLeftClick.png";
import rightClick from "../Images/mouseRightClick.png";
import mineTutorialPic from "../Images/mineTutorialPic.png";



import { Help } from '@material-ui/icons';
import { Card } from '@material-ui/core';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 250,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  const InstructionCard = withStyles((theme) => ({
      card:{
        padding: 20,
        display:'flex',
        alignItems : 'center',
        justifyContent:"center",
        color: theme.palette.text.secondary,
    },
  }))(Card);




function StyledSelector(props) {
    return (
        <div style={{display:"flex",alignItems:'center',justifyContent:"center",padding:20}}>
            {/* LEVEL SELECTOR */}
            <div>
                <select

                    defaultValue={props.defaultValue}
                    onChange={(e)=>props.handleChangeLevel(e)}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>


            {/* HELP ICON */}
            <div>
                <HtmlTooltip
                    title={
                    <React.Fragment >
                        <Typography  variant="h5" color="inherit">How To Play</Typography>
                        <div >
                            <Grid
                                container
                                direction="row"
                                justify="flex"
                                alignItems="center"
                                style={{padding:0}}
                            >
                            
                            <InstructionCard  square>
                            <img  style={{width:100}} src={leftClick}/>
                            <Typography style={{padding:20}} color="inherit">{"Left Click To Reveal a Mine"}</Typography>
                            
                            </InstructionCard>
                        
                        
                            <InstructionCard  square >
                            <img  style={{width:100}} src={rightClick}/>
                            <Typography style={{padding:20}} color="inherit">{"Right Click to Flag a cell i.e. mark the cell "}</Typography>

                            </InstructionCard>
                            

                        </Grid>
                        </div>

                    </React.Fragment>
                    }
                >
                    <Button><Help color="secondary" fontSize="large" /></Button>
                </HtmlTooltip>
            </div>

            {/* HOW TO PLAY */}
            <div>
                <HtmlTooltip
                    title={
                    <React.Fragment >
                        <Typography  variant="h5" color="inherit">Rules:</Typography>
                        <div >

                            <InstructionCard  square>
                            <img  style={{width:100}} src={mineTutorialPic}/>
                            <Typography style={{padding:20}} color="inherit">{"Each number N means that their are N number of bombs💣 in the surrounding cells ! BE CAREFUL !"}</Typography>
                            <Typography style={{padding:20}} color="inherit">{"Start by Randomly Revealing cells and try to Flag⛳️ All the Mines!"}</Typography>
                            <Typography style={{padding:20}} color="inherit">{"WHAT ARE YOU WAITING FOR !"}</Typography>

                            </InstructionCard>
                        
                        </div>

                    </React.Fragment>
                    }
                >
                    <Button><BubbleChartIcon color="secondary" fontSize="large" /></Button>
                </HtmlTooltip>
            </div>
        </div>
    );
}

export default StyledSelector
