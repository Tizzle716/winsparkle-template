using System;
using System.Collections.Generic;
using System.Windows.Forms;
using Microsoft.VisualStudio.TemplateWizard;
using EnvDTE;

namespace WinSparkleTemplate
{
    public class WinSparkleWizard : IWizard
    {
        private Dictionary<string, string> replacementsDictionary;

        public void RunStarted(object automationObject,
            Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
        {
            this.replacementsDictionary = replacementsDictionary;

            using (var form = new ConfigurationForm())
            {
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$companyname$", form.CompanyName);
                    replacementsDictionary.Add("$appcastdomain$", form.AppcastDomain);
                    replacementsDictionary.Add("$appversion$", "1.0.0");
                }
                else
                {
                    throw new WizardCancelledException();
                }
            }
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
        }
    }

    public class ConfigurationForm : Form
    {
        private TextBox companyNameTextBox;
        private TextBox appcastDomainTextBox;
        private Button okButton;
        private Button cancelButton;

        public string CompanyName => companyNameTextBox.Text;
        public string AppcastDomain => appcastDomainTextBox.Text;

        public ConfigurationForm()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            this.Text = "WinSparkle Configuration";
            this.Width = 400;
            this.Height = 200;
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.StartPosition = FormStartPosition.CenterScreen;

            var companyNameLabel = new Label
            {
                Text = "Company Name:",
                Left = 20,
                Top = 20,
                Width = 100
            };

            companyNameTextBox = new TextBox
            {
                Left = 130,
                Top = 20,
                Width = 230
            };

            var appcastDomainLabel = new Label
            {
                Text = "Appcast Domain:",
                Left = 20,
                Top = 50,
                Width = 100
            };

            appcastDomainTextBox = new TextBox
            {
                Left = 130,
                Top = 50,
                Width = 230,
                Text = "updates.yourcompany.com"
            };

            okButton = new Button
            {
                Text = "OK",
                DialogResult = DialogResult.OK,
                Left = 200,
                Top = 120,
                Width = 75
            };

            cancelButton = new Button
            {
                Text = "Cancel",
                DialogResult = DialogResult.Cancel,
                Left = 285,
                Top = 120,
                Width = 75
            };

            this.Controls.AddRange(new Control[]
            {
                companyNameLabel,
                companyNameTextBox,
                appcastDomainLabel,
                appcastDomainTextBox,
                okButton,
                cancelButton
            });

            this.AcceptButton = okButton;
            this.CancelButton = cancelButton;
        }
    }
}