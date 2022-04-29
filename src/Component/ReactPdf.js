import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
 



});
const ReactPdf = () => {
    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <View className=''>
                    <View style={styles.t}>
                        <View>
                            <Text  className='text-[16px] font-medium'>Here’s how much Bywert could save by switching to Bursement</Text>
                            <View style={styles.dis} className='grid grid-cols-3 gap-4 mt-[60px] pb-[160px] px-[35px]'>
                                <View>
                                    <Text className='text-[16px] font-bold'>Based on the data entered,<br /> studies and <br /> some assumptions</Text>
                                </View>
                                <View>
                                    <Text className='text-[20px] font-bold'>1452</Text>
                                    <Text>hours per year</Text>
                                </View>
                                <View>
                                    <Text className='text-[26px] font-bold'>£84.2k</Text>
                                    <Text>per year</Text>
                                </View>

                            </View>



                        </View>
                    </View>

                    <View className='grid grid-cols-3 gap-4 '>
                        <View className='bg-slate-50 py-[15px] px-[25px] w-[60%]'>
                            <Text className=' text-[16px] font-normal mb-[15px]' >where these numbers <br /> come from </Text>
                            <Text className=' text-[16px] font-normal'>How can traditional <br /> expense claims be so <br /> expensive? Here’s how...
                            </Text>
                        </View>
                        <View className=' py-[15px] px-[25px] '>
                            <Text className=' text-[46px] font-medium mb-[15px]' >32 mins </Text>
                            <Text className=' text-[16px] font-normal'>Average time to process a <br />
                                automatic expense claim

                            </Text>
                        </View>
                        <View className=' py-[15px] px-[25px] '>
                            <Text className=' text-[46px] font-medium mb-[15px]' >20% </Text>
                            <Text className=' text-[16px] font-normal'>Of expense claims contain <br /> errors and need to be <br />corrected.
                            </Text>
                        </View>

                    </View>
                    <View className='grid grid-cols-3 gap-4 mt-[25px] '>

                        <View className=' py-[15px] px-[25px] '>
                            <Text className=' text-[46px] font-medium mb-[15px]' >£26 </Text>
                            <Text className=' text-[16px] font-normal'>Cost of processing an <br />
                                expense claim at Bywert, <br />
                                based on the average <br />
                                salary

                            </Text>
                        </View>
                        <View className=' py-[15px] px-[25px] '>
                            <Text className=' text-[46px] font-medium mb-[15px]' >18 mins </Text>
                            <Text className=' text-[16px] font-normal'>Average time it takes to <br />
                                fix an expense claim that <br />
                                contain errors.

                            </Text>
                        </View>
                        <View className=' py-[15px] px-[25px] '>
                            <Text className=' text-[46px] font-medium mb-[15px]' >5% </Text>
                            <Text className=' text-[16px] font-normal'>Money lost through lack of <br />
                                oversight with traditional <br />
                                expense claims.
                            </Text>
                        </View>

                    </View>
                    <View className='bg-slate-50 p-[30px] ' >
                        <View>
                            <Text className=' text-[26px] font-normal'>Here’s how Bursement can save Bywert £84.2k and 1452 hours on expense claims, every year</Text>
                        </View>
                        <View className='grid grid-cols-2 gap-4 mt-[25px] '>
                            <View className='flex  items-center'>
                                <View className='w-[56px] h-[56px] bg-red-200 rounded-[10px] mr-[12px]'>

                                </View>
                                <View>
                                    <Text className='text-[15px] font-bold'>Automated expenses</Text>
                                    <Text>Aapture receipts on-the-go, process expenses <br />
                                        error-free in seconds</Text>
                                </View>
                            </View>
                            <View className='flex  items-center'>
                                <View className='w-[56px] h-[56px] bg-yellow-200 rounded-[10px] mr-[12px]'>

                                </View>
                                <View>
                                    <Text className='text-[15px] font-bold'>Real-time overview</Text>
                                    <Text>See all spending as-it-happens. Act right away if <br />
                                        something’s not right</Text>
                                </View>
                            </View>
                            <View className='flex  items-center'>
                                <View className='w-[56px] h-[56px] bg-green-200 rounded-[10px] mr-[12px]'>

                                </View>
                                <View>
                                    <Text className='text-[15px] font-bold'>Simplified bookeeping</Text>
                                    <Text>Connect Pleo to your accounting tools for <br />
                                        bookkeeping made easy</Text>
                                </View>
                            </View>
                            <View className='flex  items-center'>
                                <View className='w-[56px] h-[56px] bg-violet-200 rounded-[10px] mr-[12px]'>

                                </View>
                                <View>
                                    <Text className='text-[15px] font-bold'>Spending limits</Text>
                                    <Text>Easily set and adjust limits for each individual <br />
                                        Pleo card</Text>
                                </View>
                            </View>
                            <View className='flex  items-center'>
                                <View className='w-[56px] h-[56px] bg-teal-200 rounded-[10px] mr-[12px]'>

                                </View>
                                <View>
                                    <Text className='text-[15px] font-bold'>No more reimbursements</Text>
                                    <Text>Your team get their own Pleo spending cards,<br />
                                        whether that’s virtual or plastic</Text>
                                </View>
                            </View>
                            <View className='flex  items-center'>
                                <View className='w-[56px] h-[56px] bg-teal-200 rounded-[10px] mr-[12px]'>

                                </View>
                                <View>
                                    <Text className='text-[15px] font-bold'>Exclusive Pleo Perks offers</Text>
                                    <Text>Save up to £50,000 a year on software that our <br />
                                        customers love</Text>
                                </View>
                            </View>





                        </View>


                    </View>

                </View>
            </Page>
        </Document>

    );
};

export default ReactPdf;