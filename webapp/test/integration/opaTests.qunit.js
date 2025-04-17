sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'as/fi/orders/test/integration/FirstJourney',
		'as/fi/orders/test/integration/pages/ZC_ORDERSList',
		'as/fi/orders/test/integration/pages/ZC_ORDERSObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_ORDERSList, ZC_ORDERSObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('as/fi/orders') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_ORDERSList: ZC_ORDERSList,
					onTheZC_ORDERSObjectPage: ZC_ORDERSObjectPage
                }
            },
            opaJourney.run
        );
    }
);