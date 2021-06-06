import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


import { Help } from '@material-ui/icons';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);


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
                    <React.Fragment>
                        <Typography color="inherit">How To Play</Typography>

                        {"Left Click To Reveal a Mine"}
                        {"Right Click to Flag a cell i.e. mark the cell "}
                        
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
