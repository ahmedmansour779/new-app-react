import React from 'react'
import Overview from '../../../../Overview'
import overviewData from '../../../../Overview/OverviewData'
import { UpOverviewWrapper } from '../../../../Overview/Styles'

function OverView() {
    return (
        <>
            <UpOverviewWrapper id='overView'>
                {overviewData.map(item => {
                    return (
                        <Overview
                            icon={item.icon}
                            title={item.title}
                            describtion={item.description}
                            key={item.id} />
                    )
                })}
            </UpOverviewWrapper>
        </>
    )
}

export default OverView