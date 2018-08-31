<?php
/**
 * Copyright © Shopigo. All rights reserved.
 * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
 */

namespace Shopigo\CatalogAjaxFilter\Block\Product\ProductList;

use Magento\Catalog\Helper\Product\ProductList;
use Magento\Framework\View\Element\Template\Context;
use Magento\Framework\View\Element\Template;
use Magento\Store\Model\ScopeInterface;
use Shopigo\CatalogAjaxFilter\Helper\Data as DataHelper;

class AjaxFilter extends Template
{
    /**
     * Config paths
     */
    const XML_PATH_AJAX_REQUEST_TIMEOUT   = 'shopigo_catalogajaxfilter/general/ajax_request_timeout';
    const XML_PATH_SCROLL_TO_TOP_ENABLED  = 'shopigo_catalogajaxfilter/general/scroll_to_top_enabled';
    const XML_PATH_SCROLL_TO_TOP_EASING   = 'shopigo_catalogajaxfilter/general/scroll_to_top_easing';
    const XML_PATH_SCROLL_TO_TOP_DURATION = 'shopigo_catalogajaxfilter/general/scroll_to_top_duration';
    const XML_PATH_SCROLL_TO_TOP_OFFSET   = 'shopigo_catalogajaxfilter/general/scroll_to_top_offset';

    /**
     * Data helper
     *
     * @var DataHelper
     */
    protected $dataHelper;

    /**
     * Check the availability to display the block
     *
     * @return bool
     */
    protected function canDisplay()
    {
        if (!$this->dataHelper->isEnabled()) {
            return false;
        }
        return true;
    }

    /**
     * Render block HTML
     *
     * @return string
     */
    protected function _toHtml()
    {
        if (!$this->canDisplay()) {
            return '';
        }
        return parent::_toHtml();
    }

    /**
     * Initialize dependencies
     *
     * @param Context $context
     * @param FileStoreHelper $fileStorageHelper
     * @param RemoveTags $removeTags
     * @param DataHelper $dataHelper
     * @param array $data
     * @return void
     */
    public function __construct(
        Context $context,
        DataHelper $dataHelper,
        array $data = []
    ) {
        $this->dataHelper = $dataHelper;
        parent::__construct($context, $data);
    }

    /**
     * Retrieve AJAX request timeout
     *
     * @return int
     */
    public function getAjaxRequestTimeout()
    {
        return (int)$this->_scopeConfig->getValue(
            self::XML_PATH_AJAX_REQUEST_TIMEOUT,
            ScopeInterface::SCOPE_STORES
        );
    }

    /**
     * Retrieve whether the scroll-to-top is enabled
     *
     * @return int
     */
    public function getIsScrollToTopEnabled()
    {
        return (int)$this->_scopeConfig->isSetFlag(
            self::XML_PATH_SCROLL_TO_TOP_ENABLED,
            ScopeInterface::SCOPE_STORES
        );
    }

    /**
     * Retrieve scroll-to-top easing
     *
     * @return string
     */
    public function getScrollToTopEasing()
    {
        return $this->_scopeConfig->getValue(
            self::XML_PATH_SCROLL_TO_TOP_EASING,
            ScopeInterface::SCOPE_STORES
        );
    }

    /**
     * Retrieve scroll-to-top easing duration
     *
     * @return int
     */
    public function getScrollToTopDuration()
    {
        return (int)$this->_scopeConfig->getValue(
            self::XML_PATH_SCROLL_TO_TOP_DURATION,
            ScopeInterface::SCOPE_STORES
        );
    }

    /**
     * Retrieve scroll-to-top offset
     *
     * @return int
     */
    public function getScrollToTopOffset()
    {
        return (int)$this->_scopeConfig->getValue(
            self::XML_PATH_SCROLL_TO_TOP_OFFSET,
            ScopeInterface::SCOPE_STORES
        );
    }
}
