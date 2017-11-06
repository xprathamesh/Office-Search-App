({
    Search: function(component, event, helper) {
        var searchKeyFld = component.find("searchId");
        var srcValue = searchKeyFld.get("v.value");
        var isChecked = component.get("v.IsNAM");
        if(!isChecked ){
        if (srcValue == '' || srcValue == null) {
            // display error message if input value is blank or null
            searchKeyFld.set("v.errors", [{
                message: "Enter Search Keyword."
            }]);
        } else {
            searchKeyFld.set("v.errors", null);
            // call helper method
            helper.SearchHelper(component, event);
        }
        }
        else{
            searchKeyFld.set("v.errors", null);
            // call helper method
            helper.SearchHelper(component, event);
        }
           
    }
})