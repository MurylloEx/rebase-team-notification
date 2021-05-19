import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  /**Show a notification immediatly.
   * 
   * @param notificationId You should create an ID unique for each notification. 
   * Be careful, if you generate the same ID for more than one notification problems can occur.
   * @param channelId You should specify a channel ID for your notifications. 
   * @param title The title of notification.
   * @param text The text of notification
   * @param iconPath The path of small icon notification. 
   * NOTE: the icon should be stored in src/main/assets/ folder for Android.
   */
  public show(
    notificationId: number, 
    channelId: string, 
    title: string, 
    text: string, 
    iconPath: string)
  {
    return new Promise((resolve, _reject) => {
      return (<any>window).RebaseNotifications.showNotification(notificationId, channelId, title, text, iconPath, () => {
        resolve(true);
      }, () => {
        resolve(false);
      });
    });
  }

  /**Schedule a notification for future.
   * 
   * @param notificationId You should create an ID unique for each notification. 
   * Be careful, if you generate the same ID for more than one notification problems can occur.
   * @param channelId You should specify a channel ID for your notifications. 
   * @param title The title of notification.
   * @param text The text of notification
   * @param iconPath The path of small icon notification. 
   * NOTE: the icon should be stored in src/main/assets/ folder for Android.
   * @param afterXms The number of milliseconds until show the notification.
   * For example: if you want show the notification in 5 minutes, this value should be
   * 5 * 60 * 1000 = 300000 milliseconds.
   */
  public schedule(
    notificationId: number, 
    channelId: string, 
    title: string, 
    text: string, 
    iconPath: string, 
    afterXms: number): Promise<any>
  {
    return new Promise((resolve, _reject) => {
      return (<any>window).RebaseNotifications.scheduleNotification(notificationId, channelId, title, text, iconPath, afterXms, () => {
        resolve(true);
      }, () => {
        resolve(false);
      });
    });
  }

}
