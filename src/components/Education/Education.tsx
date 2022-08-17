import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { 
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';
import { useEducationStyles } from './education-styles'; 

export const Education: React.FC = () => {
  const classes = useEducationStyles();

  return (
    <Timeline className={classes.educationTimeline} position='alternate'>
      <TimelineItem className={classes.educationItem}>
        <TimelineOppositeContent >
          <Typography>Time frame</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector /> 
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className={classes.educationCardRHS}>
            <CardContent>
              <Typography>Institution</Typography>
              <Typography>Degree</Typography>
              <Typography>Majors</Typography>
              <Typography>Minors</Typography> 
              <Typography>GPA:</Typography> 
              <Typography>Honors:</Typography> 
            </CardContent>
            <CardMedia
              component='img'
              sx={{ height: 'auto', width: 200}}
              image={require('../../assets/SU_ID.jpg')}
              alt='Live from space album cover'
            />
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.educationItem}>
        <TimelineOppositeContent className={classes.opposite}>
          Time frame
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{display: 'flex', textAlign: 'right'}}>
          <Card className={classes.educationCardLHS}>
            <CardContent>Code</CardContent>
            <CardMedia
              component='img'
              sx={{ width: 200 }}
              image={require('../../assets/SU_ID.jpg')}
              alt='Live from space album cover'
            />
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.educationItem}>
        <TimelineOppositeContent className={classes.opposite}>
          Time frame
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector /> 
        </TimelineSeparator>
        <TimelineContent>
          <Card className={classes.educationCardRHS}>
            <CardContent>Sleep</CardContent>
            <CardMedia
              component='img'
              sx={{ width: 200 }}
              image={require('../../assets/SU_ID.jpg')}
              alt='Live from space album cover'
            />
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.educationItem}>
        <TimelineOppositeContent className={classes.opposite}>
          Time frame
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className={classes.educationCardLHS}>
            <CardContent>Repeat</CardContent>
            <CardMedia
              component='img'
              sx={{ width: 200 }}
              image={require('../../assets/SU_ID.jpg')}
              alt='Live from space album cover'
            />
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
