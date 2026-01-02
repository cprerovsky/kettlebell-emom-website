/**
 * Google Analytics 4 - GDPR Compliant Implementation
 * 
 * This script handles:
 * - Cookie consent banner
 * - GA4 initialization with consent mode
 * - Event tracking (download clicks)
 * - Consent preference storage
 */

// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-FX1ZDC9DSW';

// Cookie consent handling
const CONSENT_COOKIE_NAME = 'kb_analytics_consent';
const CONSENT_COOKIE_DAYS = 365;

// Initialize consent mode before GA loads
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent to 'denied' (GDPR requirement)
gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
});

// Check for existing consent
function getConsent() {
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME);
    return consent === 'accepted' ? 'granted' : 'denied';
}

// Apply saved consent on page load
const savedConsent = getConsent();
if (savedConsent === 'granted') {
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
}

// Load Google Analytics
function loadGA() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    script.onload = function() {
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
        });

        // Track download link clicks
        trackDownloadClicks();
    };
}

// Load GA immediately
loadGA();

// Cookie Consent Banner
function showConsentBanner() {
    // Don't show if user already made a choice
    if (localStorage.getItem(CONSENT_COOKIE_NAME)) {
        return;
    }

    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.innerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #1F2937; border-top: 1px solid #374151; padding: 1rem; z-index: 9999; box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
                <div style="flex: 1; min-width: 250px; color: #D1D5DB; font-size: 0.875rem;">
                    <p style="margin: 0;">
                        We use cookies and analytics to improve your experience and understand how visitors use our website. 
                        <a href="privacy.html" style="color: #60A5FA; text-decoration: underline;">Learn more</a>
                    </p>
                </div>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button id="cookie-decline" style="background: #374151; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; border: none; cursor: pointer; font-weight: 600; font-size: 0.875rem; transition: background 0.2s;">
                        Decline
                    </button>
                    <button id="cookie-accept" style="background: linear-gradient(to right, #60A5FA, #6366F1); color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; border: none; cursor: pointer; font-weight: 600; font-size: 0.875rem; transition: transform 0.2s;">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(banner);

    // Handle accept
    document.getElementById('cookie-accept').addEventListener('click', function() {
        acceptCookies();
        banner.remove();
    });

    // Handle decline
    document.getElementById('cookie-decline').addEventListener('click', function() {
        declineCookies();
        banner.remove();
    });

    // Add hover effects
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    acceptBtn.addEventListener('mouseenter', () => {
        acceptBtn.style.transform = 'scale(1.05)';
    });
    acceptBtn.addEventListener('mouseleave', () => {
        acceptBtn.style.transform = 'scale(1)';
    });

    declineBtn.addEventListener('mouseenter', () => {
        declineBtn.style.background = '#4B5563';
    });
    declineBtn.addEventListener('mouseleave', () => {
        declineBtn.style.background = '#374151';
    });
}

// Accept cookies
function acceptCookies() {
    localStorage.setItem(CONSENT_COOKIE_NAME, 'accepted');
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
}

// Decline cookies
function declineCookies() {
    localStorage.setItem(CONSENT_COOKIE_NAME, 'declined');
    gtag('consent', 'update', {
        'analytics_storage': 'denied'
    });
}

// Track download link clicks
function trackDownloadClicks() {
    // Track App Store download clicks
    const appStoreLink = document.getElementById('app-store-link');
    if (appStoreLink) {
        appStoreLink.addEventListener('click', function(e) {
            gtag('event', 'download_click', {
                'event_category': 'engagement',
                'event_label': 'App Store Download',
                'value': 1
            });
        });
    }

    // Track all external links as potential download links
    document.querySelectorAll('a[href*="apps.apple.com"], a[href*="play.google.com"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.href.includes('apple') ? 'App Store' : 'Google Play';
            gtag('event', 'download_click', {
                'event_category': 'engagement',
                'event_label': platform,
                'value': 1
            });
        });
    });
}

// Show consent banner when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showConsentBanner);
} else {
    showConsentBanner();
}
