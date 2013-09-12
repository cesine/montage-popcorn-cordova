package org.montagejs.popcorn;

import android.content.Context;
import ca.ilanguage.oprime.activity.HTML5Activity;
import ca.ilanguage.oprime.content.JavaScriptInterface;

public class HTML5JavaScriptInterface extends JavaScriptInterface {

	public HTML5JavaScriptInterface(boolean d, String tag, String outputDir,
			Context context, HTML5Activity UIParent, String assetsPrefix) {
		super(d, tag, outputDir, context, UIParent, assetsPrefix);
	}

	@Override
	public HTML5Activity getUIParent() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setUIParent(HTML5Activity UIParent) {
		// TODO Auto-generated method stub

	}

}
