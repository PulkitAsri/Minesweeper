import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import leftClick from "../Images/mouseLeftClick.png";
import rightClick from "../Images/mouseRightClick.png";



import { Help } from '@material-ui/icons';
import { Card } from '@material-ui/core';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  const InstructionCard = withStyles((theme) => ({
      card:{
        padding: 20,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }))(Card);




function StyledSelector(props) {
    return (
        <div style={{display:"flex",alignItems:'center',justifyContent:"center",padding:20}}>
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
            <div>
                <HtmlTooltip
                    title={
                    <React.Fragment >
                        <Typography  variant="h5" color="inherit">How To Play</Typography>
                        <div >
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                style={{padding:20}}
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
        </div>
    );
}

export default StyledSelector
