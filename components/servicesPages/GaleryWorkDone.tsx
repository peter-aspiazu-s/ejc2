import {FC} from 'react';
import { Grid, Paper, Typography } from '@mui/material';

type ImgType = {
    img: string;
    title: string;
}

interface GaleryWorkDoneProps {
    workDone: string;
    imgData: ImgType[];
}

export const GaleryWorkDone: FC<GaleryWorkDoneProps> = ({
    workDone,
    imgData
}) => {
  return (
    <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid item xs={12}>
            <Typography
                sx={{
                    color: 'text.disabled',
                    fontSize: {
                        xs: '1.4rem', 
                        sm: '1.5rem', 
                        md: '1.7rem', 
                        lg: '1.8rem', 
                        xl: '1.9rem'
                    },
                    textAlign: 'center',
                    mb: 3 
                }}
            >
                {workDone}
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{display:{xs: 'flex', justifyContent: 'center', alingItems: 'center'}}}>
            <Grid container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
                spacing={10}
            >
                <Grid 
                    item 
                    xs={12} sm={6} md={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',   
                    }}>
                        <Paper elevation={3} sx={{
                            width:{xs:300},
                            height: {xs: 400},
                            overflow: 'scroll',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',  
                            flexDirection: 'column' 
                        }}>
                        {imgData.map((item) => (
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            width={300}
                        />
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}