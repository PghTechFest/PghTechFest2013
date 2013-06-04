package org.ruboto;

import org.ruboto.Script;
import org.ruboto.ScriptLoader;
import java.io.IOException;

public class RubotoService extends android.app.Service implements org.ruboto.RubotoComponent {
    private final ScriptInfo scriptInfo = new ScriptInfo();

    public ScriptInfo getScriptInfo() {
        return scriptInfo;
    }

    /****************************************************************************************
     *
     *  Service Lifecycle: onCreate
     */
    @Override
    public void onCreate() {
      System.out.println("RubotoService onCreate(): " + getClass().getName());

      if (ScriptLoader.isCalledFromJRuby()) {
        super.onCreate();
        return;
      }

      if (JRubyAdapter.isInitialized() && scriptInfo.isReadyToLoad()) {
  	    ScriptLoader.loadScript(this);
      } else {
        super.onCreate();
      }
    }

  // FIXME(uwe):  Revert to generate these methods.
  @Override
  public int onStartCommand(android.content.Intent intent, int flags, int startId) {
	  if (ScriptLoader.isCalledFromJRuby()) return super.onStartCommand(intent, flags, startId);

    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onStartCommand");
      return super.onStartCommand(intent, flags, startId);
    }
	
    if (JRubyAdapter.isInitialized() && !scriptInfo.isLoaded()) {
      scriptInfo.setFromIntent(intent);
 	    ScriptLoader.loadScript(this);
    }
	  
	  String rubyClassName = scriptInfo.getRubyClassName();
	  if (rubyClassName == null) return super.onStartCommand(intent, flags, startId);
	  if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_start_command}")) {
        return (Integer) JRubyAdapter.runRubyMethod(Integer.class, scriptInfo.getRubyInstance(), "on_start_command", new Object[]{intent, flags, startId});
      } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onStartCommand}")) {
        return (Integer) JRubyAdapter.runRubyMethod(Integer.class, scriptInfo.getRubyInstance(), "onStartCommand", new Object[]{intent, flags, startId});
      } else {
        return super.onStartCommand(intent, flags, startId);
      }
    }
  }

  // FIXME(uwe):  Revert to generate these methods.
  @Override
  public android.os.IBinder onBind(android.content.Intent intent) {
    if (ScriptLoader.isCalledFromJRuby()) return null;
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onBind");
      return null;
    }

    if (JRubyAdapter.isInitialized() && !scriptInfo.isLoaded()) {
      scriptInfo.setFromIntent(intent);
      ScriptLoader.loadScript(this);
    }
      
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) return null;
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_bind}")) {
      return (android.os.IBinder) JRubyAdapter.runRubyMethod(android.os.IBinder.class, scriptInfo.getRubyInstance(), "on_bind", intent);
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onBind}")) {
        return (android.os.IBinder) JRubyAdapter.runRubyMethod(android.os.IBinder.class, scriptInfo.getRubyInstance(), "onBind", intent);
      } else {
        return null;
      }
    }
  }


  /****************************************************************************************
   * 
   *  Generated Methods
   */

  public void onConfigurationChanged(android.content.res.Configuration newConfig) {
    if (ScriptLoader.isCalledFromJRuby()) {super.onConfigurationChanged(newConfig); return;}
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onConfigurationChanged");
      {super.onConfigurationChanged(newConfig); return;}
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) {super.onConfigurationChanged(newConfig); return;}
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_configuration_changed}")) {
      JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "on_configuration_changed", newConfig);
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onConfigurationChanged}")) {
        JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "onConfigurationChanged", newConfig);
      } else {
        {super.onConfigurationChanged(newConfig); return;}
      }
    }
  }

  public void onDestroy() {
    if (ScriptLoader.isCalledFromJRuby()) {super.onDestroy(); return;}
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onDestroy");
      {super.onDestroy(); return;}
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) {super.onDestroy(); return;}
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_destroy}")) {
      JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "on_destroy");
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onDestroy}")) {
        JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "onDestroy");
      } else {
        {super.onDestroy(); return;}
      }
    }
  }

  public void onLowMemory() {
    if (ScriptLoader.isCalledFromJRuby()) {super.onLowMemory(); return;}
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onLowMemory");
      {super.onLowMemory(); return;}
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) {super.onLowMemory(); return;}
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_low_memory}")) {
      JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "on_low_memory");
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onLowMemory}")) {
        JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "onLowMemory");
      } else {
        {super.onLowMemory(); return;}
      }
    }
  }

  public void onRebind(android.content.Intent intent) {
    if (ScriptLoader.isCalledFromJRuby()) {super.onRebind(intent); return;}
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onRebind");
      {super.onRebind(intent); return;}
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) {super.onRebind(intent); return;}
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_rebind}")) {
      JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "on_rebind", intent);
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onRebind}")) {
        JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "onRebind", intent);
      } else {
        {super.onRebind(intent); return;}
      }
    }
  }

  public void onStart(android.content.Intent intent, int startId) {
    if (ScriptLoader.isCalledFromJRuby()) {super.onStart(intent, startId); return;}
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onStart");
      {super.onStart(intent, startId); return;}
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) {super.onStart(intent, startId); return;}
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_start}")) {
      JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "on_start", new Object[]{intent, startId});
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onStart}")) {
        JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "onStart", new Object[]{intent, startId});
      } else {
        {super.onStart(intent, startId); return;}
      }
    }
  }

  public boolean onUnbind(android.content.Intent intent) {
    if (ScriptLoader.isCalledFromJRuby()) return super.onUnbind(intent);
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onUnbind");
      return super.onUnbind(intent);
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) return super.onUnbind(intent);
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_unbind}")) {
      return (Boolean) JRubyAdapter.runRubyMethod(Boolean.class, scriptInfo.getRubyInstance(), "on_unbind", intent);
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onUnbind}")) {
        return (Boolean) JRubyAdapter.runRubyMethod(Boolean.class, scriptInfo.getRubyInstance(), "onUnbind", intent);
      } else {
        return super.onUnbind(intent);
      }
    }
  }

  public void onTaskRemoved(android.content.Intent arg0) {
    if (ScriptLoader.isCalledFromJRuby()) {super.onTaskRemoved(arg0); return;}
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onTaskRemoved");
      {super.onTaskRemoved(arg0); return;}
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) {super.onTaskRemoved(arg0); return;}
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_task_removed}")) {
      JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "on_task_removed", arg0);
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onTaskRemoved}")) {
        JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "onTaskRemoved", arg0);
      } else {
        {super.onTaskRemoved(arg0); return;}
      }
    }
  }

  public void onTrimMemory(int arg0) {
    if (ScriptLoader.isCalledFromJRuby()) {super.onTrimMemory(arg0); return;}
    if (!JRubyAdapter.isInitialized()) {
      Log.i("Method called before JRuby runtime was initialized: RubotoService#onTrimMemory");
      {super.onTrimMemory(arg0); return;}
    }
    String rubyClassName = scriptInfo.getRubyClassName();
    if (rubyClassName == null) {super.onTrimMemory(arg0); return;}
    if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :on_trim_memory}")) {
      JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "on_trim_memory", arg0);
    } else {
      if ((Boolean)JRubyAdapter.runScriptlet(rubyClassName + ".instance_methods(false).any?{|m| m.to_sym == :onTrimMemory}")) {
        JRubyAdapter.runRubyMethod(scriptInfo.getRubyInstance(), "onTrimMemory", arg0);
      } else {
        {super.onTrimMemory(arg0); return;}
      }
    }
  }

}
