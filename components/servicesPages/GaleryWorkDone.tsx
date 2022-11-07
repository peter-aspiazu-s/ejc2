import {FC} from 'react';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';

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
            <ImageList 
                sx={{ 
                    width: {xs: 290, sm: 600, md: 900}, 
                    height: 400,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'space-around',
                }} gap={10} rowHeight={164}>
                {imgData.map((item) => (
                    <ImageListItem key={item.img} sx={{mb:{xs:20, sm:25, md: 23}}}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Grid>
    </Grid>
  );
}