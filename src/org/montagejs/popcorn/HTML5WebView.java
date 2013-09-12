package org.montagejs.popcorn;

import android.app.Application;
import android.util.Log;
import ca.ilanguage.oprime.activity.HTML5Activity;
import ca.ilanguage.oprime.content.JavaScriptInterface;

public class HTML5WebView extends HTML5Activity {
	HTML5JavaScriptInterface jsi; 
	@Override
	public JavaScriptInterface getJavaScriptInterface() {
		return jsi;
	}

	@Override
	public void setJavaScriptInterface(JavaScriptInterface javaScriptInterface) {
		this.jsi = (HTML5JavaScriptInterface) javaScriptInterface;

	}

	@Override
	public Application getApp() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void setUpVariables() {
		D = true;
		mOutputDir = "/sdcard/demos";
		mInitialAppServerUrl = "file:///android_asset/test_jsonp/index.html";// "http://192.168.0.180:3001/";
		this.setJavaScriptInterface(new HTML5JavaScriptInterface(D, TAG,
				mOutputDir, getApplicationContext(), this, ""));
		if (D)
			Log.d(TAG, "Using the OPrime experiment javascript interface.");

	}

}
