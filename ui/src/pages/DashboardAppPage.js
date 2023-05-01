import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title> Dashboard | Minimal UI </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4}>
                        <AppWidgetSummary 
                            title="Total Sales"
                            total={200000} 
                            icon={'material-symbols:insights'} 
                        />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4}>
                        <AppWidgetSummary
                            title="Today Sales"
                            total={10000}
                            color="info"
                            icon={'material-symbols:trending-up'}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4}>
                        <AppWidgetSummary
                            title="Total Customers"
                            total={20}
                            color="warning"
                            icon={'mdi:users'}
                        />
                    </Grid>

        
                    {/* <Grid item xs={12} md={6} lg={4}>
                        <AppOrderTimeline
                            title="Order Timeline"
                            list={[...Array(5)].map((_, index) => ({
                                id: faker.datatype.uuid(),
                                title: [
                                    '1983, orders, $4220',
                                    '12 Invoices have been paid',
                                    'Order #37745 from September',
                                    'New order placed #XF-2356',
                                    'New order placed #XF-2346',
                                ][index],
                                type: `order${index + 1}`,
                                time: faker.date.past(),
                            }))}
                        />
                    </Grid> */}
                </Grid>
            </Container>
        </>
    );
}
