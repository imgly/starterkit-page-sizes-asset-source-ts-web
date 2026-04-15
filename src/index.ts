/**
 * CE.SDK Page Sizes Editor Starterkit - Main Entry Point
 *
 * A design editor with custom page size presets and a prominent dock button
 * for easy access to page resize functionality.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initPageSizesEditor } from './imgly';
import { resolveAssetPath } from './imgly/resolveAssetPath';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-page-sizes-asset-source-user'

  // Local assets
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize Page Sizes Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    // Initialize the editor with page sizes functionality
    await initPageSizesEditor(cesdk);
    // ============================================================================
    // Scene Loading
    // ============================================================================

    // Load the page sizes scene with pre-designed content
    await cesdk.loadFromURL(
      resolveAssetPath('/assets/page-sizes.scene')
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
