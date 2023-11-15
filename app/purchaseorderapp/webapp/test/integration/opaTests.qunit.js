sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'rutika/app/purchaseorderapp/test/integration/FirstJourney',
		'rutika/app/purchaseorderapp/test/integration/pages/POsList',
		'rutika/app/purchaseorderapp/test/integration/pages/POsObjectPage',
		'rutika/app/purchaseorderapp/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('rutika/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);