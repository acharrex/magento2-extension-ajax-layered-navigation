[![Shopigo](https://www.shopigo.ch/wp-content/uploads/2018/08/github-shopigo-logo.png)](https://www.shopigo.ch)

# Magento 2 AJAX Layered Navigation extension by [Shopigo](https://www.shopigo.ch)

This extension enhances the default layered navigation with fast AJAX approach.

When a filter is selected from the layered navigation block, the page is automatically reloaded in AJAX, making the browsing more comfortable for the user and performing a significant speed increase.

## Requirements

Magento Open Source Edition 2.2.x.

## Installation

## Method 1 - Installing via composer

- Switch to your Magento project root
- Run `composer require shopigo/magento2-extension-ajax-layered-navigation`

## Method 2 - Installing using archive

- Download [ZIP Archive](https://github.com/shopigo/magento2-extension-ajax-layered-navigation/archive/master.zip)
- Switch to your Magento project root
- Create folder `app/code/Shopigo/CatalogAjaxFilter`
- Extract zip into path

### Enable extension

- Switch to your Magento project root
- Run the following commands to enable the module and clear static contents generated by Magento:
```
php bin/magento module:enable Shopigo_CatalogAjaxFilter
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```

## How to use it

- Log into your Magento back-office
- Go to the menu "Stores > Configuration > Shopigo Extensions > AJAX Layered Navigation"
- Set the parameter "Use AJAX to Apply Filters" to "Yes"
- Flush Magento caches from the menu "System > Tools > Cache Management"

## Screenshots

### Step 1 - Select a filter

![Step 1 - Select a filter](https://www.shopigo.ch/wp-content/uploads/2018/10/github-extension-ajax-layered-navigation-plp-filter.jpg)

### Step 2 - Products are loaded with AJAX

![Step 2 - Products are loaded in AJAX](https://www.shopigo.ch/wp-content/uploads/2018/10/github-extension-ajax-layered-navigation-plp-loading.jpg)

### Step 3 - Results are shown without reloading the page

![Step 3 - Results are shown without reloading the page](https://www.shopigo.ch/wp-content/uploads/2018/10/github-extension-ajax-layered-navigation-plp-loaded.jpg)

### When an error occurs with the AJAX request

![When an error occurs with the AJAX request](https://www.shopigo.ch/wp-content/uploads/2018/10/github-extension-ajax-layered-navigation-plp-loading-error.jpg)

### Extension settings

![Extension settings](https://www.shopigo.ch/wp-content/uploads/2018/10/github-extension-ajax-layered-navigation-settings.jpg)

## Support

If you have any issues, open a bug report in GitHub's [issue tracker](https://github.com/shopigo/magento2-extension-ajax-layered-navigation/issues).

## Need more features?

Please contact us to get a quote https://www.shopigo.ch/contact

## Change logs

**Version 1.0.0** (2018-10-09)
- First version

## License

The code is licensed under [Open Software License ("OSL") v. 3.0](http://opensource.org/licenses/osl-3.0.php).

<br/>Enjoy!<br/>
[Shopigo](https://www.shopigo.ch)