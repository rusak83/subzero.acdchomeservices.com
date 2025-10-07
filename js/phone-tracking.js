// Phone number tracking system
(function() {
    const trackingNumbers = {
        'default': '(469) 646-0770',
        'google': '(469) 646-0771', 
        'facebook': '(469) 646-0772',
        'direct': '(469) 646-0770'
    };

    function getTrafficSource() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get('utm_source');
        const referrer = document.referrer.toLowerCase();
        
        if (utmSource) {
            return utmSource.toLowerCase();
        } else if (referrer.includes('google')) {
            return 'google';
        } else if (referrer.includes('facebook')) {
            return 'facebook';
        } else {
            return 'direct';
        }
    }

    function updatePhoneNumbers() {
        const source = getTrafficSource();
        const phoneNumber = trackingNumbers[source] || trackingNumbers['default'];
        
        // Update all phone number elements
        const phoneElements = document.querySelectorAll('a[href^="tel:"], .phone-number, .subzero-call-btn');
        phoneElements.forEach(element => {
            if (element.tagName === 'A') {
                element.href = 'tel:' + phoneNumber.replace(/[^\d]/g, '');
            }
            element.textContent = phoneNumber;
        });

        // Send tracking data to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'phone_number_assigned',
            'traffic_source': source,
            'phone_number': phoneNumber
        });
    }

    // Update phone numbers when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updatePhoneNumbers);
    } else {
        updatePhoneNumbers();
    }
})();
